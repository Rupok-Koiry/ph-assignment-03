import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  color: {
    type: String,
    trim: true,
    required: true,
  },
  isElectric: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  features: {
    type: [String],
    default: [],
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

carSchema.pre(/^find/, function (next) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  this.find({ isDeleted: { $ne: true } });
  next();
});
const Car = model<TCar>('Car', carSchema);
export default Car;
