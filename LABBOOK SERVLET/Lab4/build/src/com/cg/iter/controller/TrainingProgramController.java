package com.cg.iter.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cg.iter.model.TrainingProgram;
import com.cg.iter.service.TrainingProgramService;

@WebServlet("/trainingList")
public class TrainingProgramController extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrainingProgramService service = new TrainingProgramService();
		PrintWriter out = response.getWriter();
		
		response.setContentType("text/html");
		
		List<TrainingProgram> list = service.getAllTrainingPrograms();
		
		out.println("<table border='1'>");
		out.println("<th>TrainingId</th><th>TrainingName</th><th>AvailableSeats</th>");
		for (TrainingProgram trainingProgram : list) {
			out.println("<tr><td>"+trainingProgram.getId()+"</td>");
			out.println("<td>"+trainingProgram.getName()+"</td>");
			out.println("<td>"+trainingProgram.getSeats()+"</td>"
					+"<td><a href='enroll?id="+trainingProgram.getId()+"&name="+trainingProgram.getName()+"'>Enroll</a></td>"
					+ "</tr>");
		}
		out.println("</table>");
		
	}

}
