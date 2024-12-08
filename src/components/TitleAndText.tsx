const TitleAndText: React.FC<{ title: string, text: string | number | undefined | null }> = ({ title, text }) => {
    return <div>
        <p className="text-sm">{title} :</p>
        <p className="text-sm font-bold">{text ?? "-"}</p>
    </div>
}

export default TitleAndText