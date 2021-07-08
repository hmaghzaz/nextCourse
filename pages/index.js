import fs from "fs/promises";
import path from "path";

function HomePage({ products }) {
  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}> {product.title} </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  await fs.readFile(filePath);

  return {
    props: {
      products: [{ id: "p1", title: "product 1" }],
    },
  };
}

export default HomePage;
