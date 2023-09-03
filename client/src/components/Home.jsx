import AddUser from './AddUser';
import Users from './Users';
import '../index.css';
import Notes from './Notes';

export default function Home() {
  return (
    <div className="">
      <div className="flex uppercase text-xl justify-center">Home</div>

      <div>
        <AddUser />
      </div>
      <div className="bg-slate-300 flex flex-row justify-between">
        <Users />
        <Notes />
      </div>
    </div>
  );
}
