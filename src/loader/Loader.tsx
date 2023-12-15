import './Loader.css';
export function Loader() {
    return (
        <div className="loader d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}