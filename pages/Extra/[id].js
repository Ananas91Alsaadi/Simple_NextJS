

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(anas => {

        return {
            params: { id: anas.id.toString() }
            
        }

    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props: { anas: data }
    }

}

const Details = ({ anas }) => {
    return (
        <div>
            <h1>{anas.name}</h1>
            <p>{anas.email}</p>
            <p>{anas.website}</p>
            <p>{anas.address.city}</p>

        </div>
    );
}

export default Details;