const Property = require("../models/Property");

// Add Property
exports.addProperty = async (req, res) => {
  try {
    const {
      ownerId,
      propertyName,
      propertyType,
      bhk,
      carpetArea,
      furnishingType,
      address,
      nearbyLandmarks,
      ownerName,
      ownerContact,
      ownerEmail,
      alternateContact,
      monthlyRent,
      securityDeposit,
      maintenanceCharges,
      leaseDuration,
      availabilityDate,
      rentNegotiable,
      petsAllowed,
      tenantType,
      smokingPolicy,
      visitorPolicy,
      amenities,
    } = req.body;

    const photos = req.files.photos.map((file) => file.path);
    const documents = req.files.documents.map((file) => file.path);

    const property = new Property({
      ownerId,
      propertyName,
      propertyType,
      bhk,
      carpetArea,
      furnishingType,
      address,
      nearbyLandmarks,
      ownerName,
      ownerContact,
      ownerEmail,
      alternateContact,
      monthlyRent,
      securityDeposit,
      maintenanceCharges,
      leaseDuration,
      availabilityDate,
      rentNegotiable,
      petsAllowed,
      tenantType,
      smokingPolicy,
      visitorPolicy,
      photos,
      documents,
      amenities,
    });

    await property.save();
    res.status(201).json({ message: "Property added successfully", property });
  } catch (error) {
    res.status(500).json({ error: "Error adding property" });
  }
};

// Edit Property
exports.editProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (req.files.photos) updates.photos = req.files.photos.map((file) => file.path);
    if (req.files.documents) updates.documents = req.files.documents.map((file) => file.path);

    const property = await Property.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ message: "Property updated successfully", property });
  } catch (error) {
    res.status(500).json({ error: "Error updating property" });
  }
};

// Get All Properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Error fetching properties" });
  }
};
// Update property (approve/reject/edit)
exports.updateProperty = async (req, res) => {
  const { id } = req.params;
  const { status, name, description, price, category } = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      { status, name, description, price, category },
      { new: true }
    );
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Error updating property", error });
  }
};

// Delete property
exports.deleteProperty = async (req, res) => {
  const { id } = req.params;

  try {
    await Property.findByIdAndDelete(id);
    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting property", error });
  }
};