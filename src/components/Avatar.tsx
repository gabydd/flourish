type AvatarProps = {
    name: string;
    src: string;
    size: "sm" |"md" | "lg"
}

function Avatar({name, src, size}: AvatarProps) {
    return (
        <img src={src} alt={name} className="rounded-full" />
    )
}