export default function Contact() {
  return (
    <>
      <div className="container h-[600px] ">
        <div className="row h-full text-center">
          <div className="info col bg-slate-500 ">
            <h1>Welcome to The form Section</h1>
          </div>
          <div className="form  col bg-slate-700">
            <form action="#">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Are You OK?
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
