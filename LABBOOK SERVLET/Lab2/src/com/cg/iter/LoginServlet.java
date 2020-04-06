package com.cg.iter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/validate")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		if(password.equalsIgnoreCase("servlet"))
		{  
			out.print("Success!!");  
			RequestDispatcher rd=request.getRequestDispatcher("/login.html");  
			rd.include(request, response);  
		}  
		else
		{  
			out.print("Sorry UserName or Password Error!!!");  
			RequestDispatcher rd=request.getRequestDispatcher("/login.html");  
			rd.include(request, response);  

		}  

	}

}
