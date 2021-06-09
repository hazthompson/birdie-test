import { DataTypes, Model } from "sequelize";
import db from "../utils/db";
import { EventModelInterface } from "../../../utils/interfaces";

class EventModel extends Model<EventModelInterface> {}

EventModel.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    care_recipient_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alert_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task_instance_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visit_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    caregiver_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rejected_event_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observation_event_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    sequelize: db, // We need to pass the connection instance
    modelName: "EventModel", // We need to choose the model name
    tableName: "events",
    timestamps: false,
  }
);

export default EventModel;
