export default function TestPage({ splicedata }) {
  return (
    <div className="min-h-screen grid px-4 py-3 gap-3 grid-cols-4">
      {splicedata.map((items) => (
        <div
          key={items.id}
          className="border border-gray-800 px-2 py-2 flex flex-col "
        >
          <div className="bg-red-600">
            <h1>Title : {items.title}</h1>
            <p>Body : {items.body}</p>
          </div>
          <div className="mt-2 bg-blue-500">
            <button className="bg-blue-400 px-2 py-2 rounded">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blog_data = await data.json();

  const splicedata = blog_data.slice(0, 10);
  return {
    props: {
      splicedata,
    },
  };
}
