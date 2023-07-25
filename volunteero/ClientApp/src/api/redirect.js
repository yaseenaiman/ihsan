import { useNavigate } from "react-router-dom";

const ButtonRedirect = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("home");
        }}
        class="btn btn-primary"
      >
        login
      </button>
    </div>
  );
};
export default ButtonRedirect;
