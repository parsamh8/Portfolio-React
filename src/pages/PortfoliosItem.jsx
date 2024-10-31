
export default function PortfoliosItem (props) {

    return (
    <section>
        <img src={props.image}/>
        <a href={props.github}/>
        <a href={props.deployed}/>
    </section>
)
} 