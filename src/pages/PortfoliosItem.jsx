
export default function PortfoliosItem (props) {
console.log(props);

    return (
    <>
    <section>
        <img src={props.image}/>
        <a href={props.github}> Github </a>
        <a href={props.deployed}>Deployed</a>
    </section>
    </>
)
} 