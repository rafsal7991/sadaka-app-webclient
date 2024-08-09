export const inputMask = `
import Textinput from "@/components/ui/Textinput";
import InputGroup from "@/components/ui/InputGroup";
const InputMask = () => {
    return (
        <>
            <Textinput
                label="prefix"
                id="prefix"
                options={{
                    prefix: "+88",
                    blocks: [3, 3, 3, 4],
                    uppercase: true,
                }}
                placeholder="+88"
                isMask
            />
            <Textinput
                label="Blocks"
                id="block"
                options={{ blocks: [4, 3, 3], uppercase: true }}
                placeholder="Block[1,4,7]"
                isMask
            />
            <Textinput
                label="Delimiters"
                id="delimiters"
                options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
                placeholder="Delimiter: '.'"
                isMask
            />
            <Textinput
                label="Custom Delimiters"
                id="customDelimiter"
                options={{
                    delimiters: [".", ".", "-"],
                    blocks: [3, 3, 3, 2],
                    uppercase: true,
                }}
                placeholder="Delimiter: ['.', '.', '-']"
                isMask
            />
            <Textinput
                label="Credit Card"
                isMask
                options={{ creditCard: true }}
                placeholder="0000 0000 0000 0000"
            />
            <InputGroup
                label="Phone Number"
                prepend="(+6)"
                placeholder="Phone Number"
                id="phoneNumber"
                options={{ phone: true, phoneRegionCode: "US" }}
                isMask
            />

            <Textinput
                label="Date"
                id="date"
                options={{ date: true, datePattern: ["Y", "m", "d"] }}
                placeholder="YYYY-MM-DD"
                isMask
            />
            <Textinput
                label="Time"
                id="time"
                options={{ time: true, timePattern: ["h", "m", "s"] }}
                placeholder="HH:MM:SS"
                isMask
            />
            <Textinput
                label="Numeral Formatting"
                id="nu"
                options={{ numeral: true }}
                placeholder="10,000"
                isMask
            />
        </>
    );
};

export default InputMask;
`