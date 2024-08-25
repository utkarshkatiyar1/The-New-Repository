import mongoose from "mongoose";

const OneShooSchema = new mongoose.Schema({
    shooData: {
        type: Object,
      },

});

const OneShoo = mongoose.models.OneShoo || mongoose.model("OneShoo", OneShooSchema);

export default OneShoo;