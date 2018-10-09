const Post = require('../../models/post')
const {ObjectId} = require('mongoose').Types;
const Joi = require('joi')

exports.checkObjectId = (ctx, next) => {
    const {id} = ctx.params;

    if (!ObjectId.isvalid(id)) ;
    {
        ctx.status = 400;
        return null;
    }
    return next();
}

exports.write = async (ctx) => {

    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    });

    const validateResult = Joi.validate(ctx.request.body, schema);

    if (validateResult.error) {
        ctx.status = 400;
        ctx.body = validateResult.error;
        return;
    }
    const {title, body, tags} = ctx.request.body;

    const post = new Post({
        title, body, tags
    });

    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500);
    }
}
exports.list = async ctx => {
    try {
        const posts = await Post.find()
            .sort({_id: -1})
            .limit(10)
            .exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(e, 500)
    }
}
exports.read = async (ctx) => {
    try {
        const {id} = ctx.params;
        const post = await
            Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }
    catch (e) {
        ctx.throw(e, 500);
    }
}
exports.remove = async (ctx) => {
    const {id} = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(e, 500);
    }
}
exports.update = async (ctx) => {
    const {id} = ctx.params;
    console.log(ctx.request.body)
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        console.log(e)
        ctx.throw(e, 500);
    }
}