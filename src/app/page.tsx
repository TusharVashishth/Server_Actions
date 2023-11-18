import prisma from "@/DB/db.config";
import AddThought from "@/components/AddThought";
import ThoughtCard from "@/components/ThoughtCard";
import { Button } from "@/components/ui/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Home() {
  const thoughts: Array<ThoughtType> | [] = await prisma.thoughts.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container mt-14">
        <div className="text-end">
          <AddThought />
        </div>

        {/* * Display Thoughts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {thoughts.length > 0 &&
            thoughts.map((item) => (
              <ThoughtCard thought={item} key={item.id} />
            ))}
        </div>
      </div>
    </>
  );
}
