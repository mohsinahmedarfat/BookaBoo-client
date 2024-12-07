import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-124px)]">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#1A5319] to-[#80AF81] inline-block text-transparent bg-clip-text">
            BookaBoo
          </span>
        </h1>

        <div>
          <h1 className="font-semibold text-2xl">
            Browse{" "}
            <span className="underline hover:text-[#1A5319]">
              <Link to="/books">Books</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
