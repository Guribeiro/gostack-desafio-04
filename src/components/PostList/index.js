import React, { Component } from 'react';
import './style.scss';

import Post from '../Post';

class PostList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    id: 1,
                    author: {
                        name: "Julio Alcantara",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    date: "04 Jun 2019",
                    content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                    comments: [
                        {
                            id: 1,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
                        },
                        {
                            id: 2,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "Conteúdo do comentário"
                        },
                    ]
                },
                {
                    id: 2,
                    author: {
                        name: "Julio Alcantara",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    date: "04 Jun 2019",
                    content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                    comments: [
                        {
                            id: 1,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "Conteúdo do comentário"
                        }
                    ]
                },
                {
                    id: 3,
                    author: {
                        name: "Julio Alcantara",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    date: "04 Jun 2019",
                    content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                    comments: [
                        {
                            id: 1,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "Conteúdo do comentário"
                        },
                        {
                            id: 1,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "Conteúdo do comentário"
                        },
                        {
                            id: 1,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "http://url-da-imagem.com/imagem.jpg"
                            },
                            content: "Conteúdo do comentário"
                        },
                    ]
                },
            ]
        }
    }



    render() {

        const { posts } = this.state;

        return (
            <div className='post-list'>
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        );
    }
}

export default PostList;