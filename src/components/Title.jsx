import "./Title.css"

const Title = ({text, className="", style={} }) =>{
    return <h1 className={`default-title ${className}`} style={style}>{text}</h1>;
};

export default Title