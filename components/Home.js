
import Header from './Header';
import Footer from './Footer';
import LastArticles from './LastArticles';
import Articles from './Articles';

const products = [
  {
    name: 'PHANTOM I White',
    description: 'A class of its own.',
    image: '/phantom1.png',
  },
  {
    name: 'PHANTOM II Gold',
    description: 'Pure sound.',
    image: '/phantom2.png',
  },
  {
    name: 'PHANTOM II Black',
    description: 'Deeply nomadic.',
    image: '/phantom3.png',
  },
  {
    name: 'PHANTOM II White',
    description: 'Intensively immersive.',
    image: '/phantom4.png',
  },
];



export default function Home() {
  const articles = products.map((data, i)=>{
  return (
  <Articles  key={i}  name={data.name} description={data.description} image={data.image} alt={data.description}  />
  )}) 
  return (
    <div>
       <Header />
       <LastArticles />
       {articles}
       <Footer />
    </div>
  );
}



