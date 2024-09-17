export default function Root(props) {
  return (
    <section className="container bg-light">
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="card bg-success text-white shadow-lg" style={{ width: '20rem', height: '20rem' }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title">App 1</h5>
            <p className="card-text">Microfrontend App 1 rodando.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
