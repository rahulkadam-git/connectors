import FormControl from "./FormControl";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";

export const FormInput = FormControl(Input);
export const FormSelect = FormControl(Select);
export const FormTextArea = FormControl(Textarea);
