import { useEffect, useState } from "react";

export function useTypewriter(words, { typeSpeed = 45, deleteSpeed = 25, pause = 1600 } = {}) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!deleting && subIndex === words[index].length) {
            const t = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(t);
        }
        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }
        const t = setTimeout(
            () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
            deleting ? deleteSpeed : typeSpeed
        );
        return () => clearTimeout(t);
    }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return { text: words[index].substring(0, subIndex), index };
}