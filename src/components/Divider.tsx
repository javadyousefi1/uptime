const Divider: React.FC<{ title: string, className: string }> = ({ title, className }) => {
    return (<div className={className}>
        <h1 className="font-bold text-lg">{title}</h1>
    </div>);
}

export default Divider;