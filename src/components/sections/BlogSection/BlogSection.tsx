import Blogs from './Blogs';
const BlogSection = () => {
  
  return (
    <section className="mx-auto px-6 lg:px-16 py-16 font-sans bg-white">
      <span className="text-xs font-bold tracking-widest text-primary uppercase">
        What We Do
      </span>
      <h2 className="mt-4 text-2xl md:text-5xl font-black text-primary leading-tight max-w-2xl mb-16">
        WE DESIGN & BUILD BRANDS <br className='sm:hidden'/> THAT SPEAK TO AUDIENCES
      </h2>
      <Blogs/>
    </section>
  );
}

export default BlogSection;