import star from '../../assets/starwars.jpg'

export default function Card(){
    return(
        <div className='card-container'>
            <div className='poster-container'>
            <img src={star} alt="" id='star'/>

            <div className='poster-detalhes'>
                <h2>Pôster: Star Wars (1977)</h2>
                <p>
                Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
                Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
                Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
                Não perca a chance de adicionar essa linda memória ao seu acervo!
            </p>
            <button className='button'>Comprar agora</button>
            </div>
            </div>
        </div>
    )
}