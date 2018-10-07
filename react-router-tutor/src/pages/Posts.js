import React from 'react'
import Post from './Post'
import {Link, Route} from 'react-router-dom'

const Posts = ({match}) => {
    const postList = [1, 2, 3].map((data) => {
        return <li key={data}><Link to={`${match.url}/${data}`}>포스트 #{data}</Link></li>
    })

    return (
        <div>
            <h3>포스트 목록</h3>
            <ul>
                {postList}
            </ul>
            <Route exact path={match.url} render={() => (<p>포스트를 선택하세요</p>)}/>
            <Route exact path={`${match.url}/:id`} component={Post}/>
        </div>

    )
}

export default Posts