import { model } from "mongoose";

import { ITerm } from "@domain/thebes_sphinx/term.types";
import TermSchema from "./term.schema";

export const TermModel = model<ITerm>("term", TermSchema);
