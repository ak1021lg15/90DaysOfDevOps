# Linux Commands Cheat Sheet

# Process management
ps - to display the currently working process.  
ps aux - Display full snapshot of running processes on your system.  
ps -ef - Show all running processes in detailed format.  
pgrep name - Find processes by name.  
kill pid - Kill a process specified by its process id(pid).  
top - Display sorted information about processes.  
htop - interactive porcess viewer (better than top).  
& - Add this character to the end of command to run it in the background.  

# File system
ls - List files and directories.  
ls -l - Detailed file list.  
ls -a - Show hidden files.  
pwd - Display the path of current working directory.  
wc X - Display the word count of X.  
head X - Display the first 10 lines of X.  
tail X - Display the last 10 lines of X.  
grep patt path/to/src - Search for a text pattern in file.  
find - Find files.  
chmod 777 file - Changes file permissions.  
chown user:group file - Change ownership of file.  
du -h - Show file/folder size on disk.  
df -h - Display free disk space(overall).  

# Networking troubleshooting
ping - Check connectivity to server.  
ip a - Show  IP Address.  
ifconfig/ip a - Display all network interfaces with IP addresses.  
netstat -a - Show listening tcp and udp ports and corresponding programs.  
traceroute host - Traces network path.  
wget url - Download files from internet. 
dig - Detailed DNS query.   
whois domain - Displays whois information for domain.  
host domain - Displays DNS IP address for domain.  
nslookup domain - Display IP address of domain.  