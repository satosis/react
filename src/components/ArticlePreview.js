import React from 'react';
import { Link } from 'react-router-dom';

const ArticlePreview = props => {
    const article = props.article;
    return (
    <div className="article-preview">
        <div className="article-meta">
            <Link to={`article/${article.slug}`}><img src={article.author.image}/></Link>
            <div className="info">
                <Link to={`@${article.author.username}`} className="author">{article.author.username}</Link>
                <span className="date">{new Date(article.createdAt).toDateString()}</span>
            </div>
            <div className="pull-xs-right">
                <button className="btn btn-sm btn-outline-primary"><i className="fa fa-heart-o"></i> {article.favoritesCount}</button>
            </div>
        </div>
        <Link className="preview" to={`article/${article.slug}`}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <span>Read more ...</span>
            <ul className="tag-list"> 
                {
                    article.tagList.map(tag =>{
                        return (
                            <li className="tag-default tag-pill tag-outline" key={tag}>
                                {tag}
                            </li>
                        )
                    })
                }
            </ul>
        </Link>
    </div>
    )
}
export default ArticlePreview;