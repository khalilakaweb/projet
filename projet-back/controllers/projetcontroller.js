const e = require("express");

//projet test controller
exports.testProjet = (req, res) => {
  try {
    res.status(200).send("projet controller is working 🚀");
  } catch (error) {
    res.status(500).send("Server Error 🚨");
  }
};

// ✅ Add business project controller
exports.addBusinessProject = async (req, res) => {
  try {
    const newBusinessProject = new BusinessProject(req.body);
    await newBusinessProject.save();

    res.status(201).send({
      success: [{ msg: "New business project added successfully ✅" }],
      business: newBusinessProject,
    });
  } catch (error) {
    console.error("Error in adding a business project:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in adding a business project 🚨" }] });
  }
};

// ✅ Get all business projects controller
exports.getAllBusinessProjects = async (req, res) => {
  try {
    const businessProjects = await BusinessProject.find();
    if (businessProjects.length === 0) {
      return res
        .status(404)
        .send({ errors: [{ msg: "No business projects found 🚨" }] });
    }

    res.status(200).send({
      success: [{ msg: "Business projects retrieved successfully ✅" }],
      businessProjects,
    });
  } catch (error) {
    console.error("Error in getting all business projects:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in getting all business projects 🚨" }] });
  }
};

// ✅ Get business project by ID controller
exports.getBusinessProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const businessProject = await BusinessProject.findById(id);

    if (!businessProject) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Business project not found 🚨" }] });
    }

    res.status(200).send({
      success: [{ msg: "Business project retrieved successfully ✅" }],
      businessProject,
    });
  } catch (error) {
    console.error("Error in getting business project by ID:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in getting business project by ID 🚨" }] });
  }
};

// ✅ Get business projects by maker controller
exports.getBusinessProjectByMake = async (req, res) => {
  try {
    const { make } = req.query;
    const businessProjects = await BusinessProject.find({
      maker: { $regex: make, $options: "i" },
    });

    if (businessProjects.length === 0) {
      return res
        .status(404)
        .send({ errors: [{ msg: "No business projects found for this maker 🚨" }] });
    }

    res.status(200).send({
      success: [{ msg: "Business projects retrieved successfully ✅" }],
      businessProjects,
    });
  } catch (error) {
    console.error("Error in getting business projects by maker:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in getting business projects by maker 🚨" }] });
  }
};

// ✅ Update business project controller
exports.updateBusinessProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBusinessProject = await BusinessProject.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedBusinessProject) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Business project not found 🚨" }] });
    }

    res.status(200).send({
      success: [{ msg: "Business project updated successfully ✅" }],
      updatedBusinessProject,
    });
  } catch (error) {
    console.error("Error in updating business project:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in updating business project 🚨" }] });
  }
};

// ✅ Delete business project controller
exports.deleteBusinessProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBusinessProject = await BusinessProject.findByIdAndDelete(id);

    if (!deletedBusinessProject) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Business project not found 🚨" }] });
    }

    res.status(200).send({
      success: [{ msg: "Business project deleted successfully ✅" }],
      deletedBusinessProject,
    });
  } catch (error) {
    console.error("Error in deleting business project:", error.message);
    res
      .status(500)
      .send({ errors: [{ msg: "Server error in deleting business project 🚨" }] });
  }
};
