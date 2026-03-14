# Process commands  
- ps -aux | head -n 10 = List running processes(top 10 lines).  
![](Image/s1.png)

-pgrep -l sshd - Get the process id by process name.  
![](Image/s2.png)   


# Service commands
- systemctl status | head -n 20 = Prints first 20 lines of system service status summary.   
![](Image/s3.png)

- systemctl list-units = used to display all active systemd units currently loaded in the system.  
- systemctl list-units --type=service --state=running | head = Prints first 10 lines of running services status.  
![](Image/s4.png)

# Log commands
- journalctl -u ssh = Displays logs for the SSH service.   
![](Image/s5.png)

- tail -n 40 /var/log/auth.log = Last 40 lines of the authentication log(ssh, sudo).  
![](Image/s6.png)

#Service for inspection (SSH)
- systemctl status ssh  
![](Image/s7.png.png)

-  systemctl status docker  
![](Image/s8.png.png)
docker service running let's stop it.  
![](Image/s9.png.png)
![](Image/s10.png.png)
![](Image/s11.png.png)





