import React from "react";

export function FormattedJSON(props: {value: any}) {
    return <pre>{JSON.stringify(props.value, null, 2)}</pre>
}