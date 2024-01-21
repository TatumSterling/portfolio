import Section from './Section';

const styles = {

}


const info = [
    {
        name: 'Technologies Known',
        description: 'I have experience working with the following technologies: React, Node.js, HTML, CSS, Javascript, JQUERY, express, bulma, bootstrap, MongoDB, MYSQL',
    },
    {
        name: 'Experience',
        description: 'lorem ipsum',
    },
    {
        name: 'About Me',
        description: 'lorem ipsum',
    }
];


function Home() {
    return (
        <div>
            {info.map(({ name, description }, index) => (
                <Section key={index} name={name} description={description} />
            ))}
        </div>
    );
}

export default Home;




