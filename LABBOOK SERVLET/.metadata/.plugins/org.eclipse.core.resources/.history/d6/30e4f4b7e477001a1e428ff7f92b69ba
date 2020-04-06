package com.cg.iter.dao;

import java.sql.*;
import java.util.*;

import com.cg.iter.model.TrainingProgram;
import com.cg.iter.util.Database;

public class TrainingProgramDao {

	private Connection connection;

	public TrainingProgramDao()
	{
		connection = Database.getConnection();
	}
	public List<TrainingProgram> getAllTrainingPrograms(){
		List<TrainingProgram> trainingPrograms = new ArrayList<TrainingProgram>();
		try {
			Statement statement = connection.createStatement();
			ResultSet rs = statement.executeQuery("select * from training");
			while (rs.next()) 
			{ 
				TrainingProgram tp = new TrainingProgram();
				tp.setId(rs.getString("TRAININGID"));
				tp.setName(rs.getString("TRAININGNAME"));
				tp.setSeats(rs.getInt("AVAILABLESEATS"));
				trainingPrograms.add(tp);
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		return trainingPrograms;
	}
	public void updateTrainingProgram(TrainingProgram trainingProgram) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("update training set availableseats=?"+ "where trainingid=?");
            preparedStatement.setInt(1, trainingProgram.getSeats());
            preparedStatement.setString(2, trainingProgram.getId());
            
            preparedStatement.executeUpdate();
 
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
