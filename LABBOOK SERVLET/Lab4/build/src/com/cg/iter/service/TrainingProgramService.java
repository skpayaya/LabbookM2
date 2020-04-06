package com.cg.iter.service;

import java.util.ArrayList;
import java.util.List;

import com.cg.iter.dao.TrainingProgramDao;
import com.cg.iter.model.TrainingProgram;

public class TrainingProgramService {

	TrainingProgramDao dao = new TrainingProgramDao();

	public List<TrainingProgram> getAllTrainingPrograms() {
		return dao.getAllTrainingPrograms();
	}
	public boolean enrollSeats(String id) {


		List<TrainingProgram> trainingPrograms = getAllTrainingPrograms();
		
		for (TrainingProgram trainingProgram : trainingPrograms) {
			if(trainingProgram.getId().equals(id)) {
				if(trainingProgram.getSeats()<1)
				{
					return false;
				}
				else 
				{
					TrainingProgram program = new TrainingProgram();
					program.setId(trainingProgram.getId());
					program.setName(trainingProgram.getName());
					program.setSeats(trainingProgram.getSeats()-1);
					dao.updateTrainingProgram(program);
				}

			}
		}
		return true;




	}
}
