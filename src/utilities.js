export function markers(string) {
    // Markers: &link& *blue* ^yellow^ @red@ $green$ %%purple%%

    // Replace markers with span
    const newString = string.replace(/\^([^^]+)\^/g, '<span class="text-yellow">$1</span>').replace((/@([^@]+)@/g), '<span class="text-red">$1</span>').replace(/\$([^\$]+)\$/g, '<span class="text-green">$1</span>').replace(/\*([^*]+)\*/g, '<span class="text-blue">$1</span>').replace(/%%([^%]+)%%/g, '<span class="text-purple">$1</span>');

    function replacer(match, offset) {
        const link = rmvSpc(offset);
        let text = offset.split('/').pop();

        if (text.includes("#"))
            text = text.split("#").pop();

        return `<a href="${link}">${text}</a>`;
    }

    // Replace &link& with <a></a>
    return newString.replace(/&([^&]+)&/g, replacer);
}

export function rmvSpc(string) {
    return string.replaceAll(' ', '');
}