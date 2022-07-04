export const Users = (props) => {
  const { users } = props;
  return (
    <div className="">
      {users.map((user) => {
        return (
          <div className="border-2 border-blue-400 mx-auto w-full h-1/4 mt-0 space-y-1" key={user.id}>
            <p> ID: {user.id} </p>
            <form>
              Name:{" "}
              <input
                className="ml-1 rounded-sm border-2 border-black"
                type="text"
                defaultValue={user.name}
                onChange={(e) => (user.name = e.target.value)}
              />
              <br></br>
              Email:{" "}
              <input
                className="ml-1 rounded-sm border-2 border-black"
                type="text"
                defaultValue={user.email}
                onChange={(e) => (user.email = e.target.value)}
              />
            </form>
          </div>
        );
      })}
    </div>
  );
};
