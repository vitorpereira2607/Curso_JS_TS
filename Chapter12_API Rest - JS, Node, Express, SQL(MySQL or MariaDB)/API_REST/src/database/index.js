import Sequelize from 'sequelize';
import { databaseConfig } from '../config/database';
import User from '../models/User'
import Project from '../models/Project';
import Category from '../models/Category';

const models = [ User, Project, Category ];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
