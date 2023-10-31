export function applyTheme(theme){
    const root=document.documentElement
    Object.keys(theme).forEach((cssVar)=>{
        root.style.setProperty(cssVar,theme[cssVar])
    })
}

export const createTheme=({primary,secondary,textBase})=>{
    return {
        "--primary-color": primary,
        "--secondary-color": secondary,
        "--text-base": textBase,
      };

}