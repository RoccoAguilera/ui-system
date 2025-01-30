type PropsCheck = [firstChild: HTMLElement, lastChild: HTMLElement]
type Orientation = {
  positionx: "left" | "right";
  positiony: "top" | "bottom";
  left: number;
  right: number;
  top: number;
}

export function calcPosition(...props: PropsCheck): Orientation {
  const [firstChild, lastChild] = props
  let orientation: Orientation = {
    positionx: "left",
    positiony: "bottom",
    left: 0,
    right: 0,
    top: 0
  }
  const firstClientRect = firstChild.getBoundingClientRect() // Obtener el rectángulo delimitador del primer hijo
  const lastClientRect = lastChild.getBoundingClientRect() // Obtener el rectángulo delimitador del último hijo

  if (firstChild.offsetParent instanceof HTMLElement) {
    const parent = firstChild.offsetParent // Obtener el elemento padre del primer hijo
    const widthParent = parent.clientWidth // Obtener el ancho del elemento padre
    const heightWindow = window.innerHeight // Obtener la altura de la ventana

    const offsetLeft = firstChild.offsetLeft // Obtener el desplazamiento izquierdo del primer hijo
    const leftSpace = offsetLeft + firstClientRect.width // Calcular el espacio izquierdo sumando el desplazamiento izquierdo y el ancho del primer hijo
    const offsetRight = widthParent - leftSpace // Calcular el desplazamiento derecho restando el espacio izquierdo del ancho del padre
    const rightSpace = offsetRight + firstClientRect.width // Calcular el espacio derecho sumando el desplazamiento derecho y el ancho del primer hijo
    const limitLeft = leftSpace - lastClientRect.width // Calcular el límite izquierdo restando el ancho del último hijo del espacio izquierdo
    const limitRight = rightSpace - lastClientRect.width // Calcular el límite derecho restando el ancho del último hijo del espacio derecho

    if (offsetLeft > offsetRight) {
      orientation = { ...orientation, positionx: "right", }
    } else {
      orientation = { ...orientation, positionx: "left", }
    }

    const offsetTop = firstChild.offsetTop - lastClientRect.height // Calcular el desplazamiento superior restando la altura del último hijo del desplazamiento superior del primer hijo
    const offsetBottom = firstChild.offsetTop + firstClientRect.height // Calcular el desplazamiento inferior sumando la altura del primer hijo al desplazamiento superior del primer hijo
    const clientBottom = firstClientRect.bottom // Obtener la coordenada inferior del rectángulo delimitador del primer hijo
    const bottomSpace = clientBottom + lastClientRect.height // Calcular el espacio inferior sumando la coordenada inferior y la altura del último hijo

    if (bottomSpace > heightWindow) {
      orientation = { ...orientation, positiony: "top" }
    } else {
      orientation = { ...orientation, positiony: "bottom" }
    }

    orientation = {
      ...orientation,
      right: limitLeft > 0 ? offsetRight : 0, // Establecer el desplazamiento derecho si el límite izquierdo es mayor que 0
      left: limitRight > 0 ? offsetLeft : 0, // Establecer el desplazamiento izquierdo si el límite derecho es mayor que 0
      top: orientation.positiony == "top" ? offsetTop : offsetBottom, // Establecer el desplazamiento superior basado en la posición vertical
    }
  }

  return orientation
}

export function assignPosition(element: HTMLElement) {
  const firstChild = element.children[0]
  const lastChild = element.children[1]

  const isHTMLElement = (firstChild instanceof HTMLElement && lastChild instanceof HTMLElement)

  if (firstChild && lastChild && isHTMLElement) {
    const { top, left, right, positionx } = calcPosition(firstChild, lastChild)
    const stylebase = "position: absolute; z-index: 50;"
    const leftStyle = `${left ? "left" : "right"}: ${left}px; top: ${top}px`
    const rightStyle = `${right ? "right" : "left"}: ${right}px; top: ${top}px`
    const style = positionx == "left" ? leftStyle : rightStyle

    lastChild.setAttribute("style", `${stylebase} ${style}`)
  }
}