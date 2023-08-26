import Task from '../components/Task';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Task
          id="1"
          date={new Date()}
          name="Sample Task"
          body="This is a sample task description."
          author="John Doe"
          status="pending"
        />
      </div>
    </main>
  );
}
