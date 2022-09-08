import { Schema } from "mongoose";

const UserComplementaryDataSchema = new Schema({
    unique_id: String,
    marital: Object,

    is_us_person: Boolean,
    us_tin: String, // Esse bloco não está sendo passado
    is_cvm_qualified_investor: Boolean,

    created_at: Number
});

export default UserComplementaryDataSchema;