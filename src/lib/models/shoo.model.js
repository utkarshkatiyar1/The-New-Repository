import mongoose from "mongoose";

const ShooSchema = new mongoose.Schema({
  shooData: {
    type: Array
  },

});

const Shoo = mongoose.models.Shoo || mongoose.model("Shoo", ShooSchema);

export default Shoo;