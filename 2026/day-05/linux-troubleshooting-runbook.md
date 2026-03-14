# # Linux Troubleshooting Drill: CPU, Memory, and Logs
# Environment basics
- command = uname -a
   output: Linux ip-172-31-25-8 6.17.0-1007-aws #7~24.04.1-Ubuntu SMP Thu Jan 22 21:04:49 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux  
   
   obervatioin : print all system information  

- command = cat /etc/os-release
   output:  PRETTY_NAME="Ubuntu 24.04.3 LTS"  
            NAME="Ubuntu"  
            VERSION_ID="24.04"  
            VERSION="24.04.3 LTS (Noble Numbat)"  

   obervation :  Confirms distribution and release version  

# Filesystem sanity
-command = mkdir /tmp/runbook-demo  
    Observation : Directory created successfully.

- Command : cp /etc/hosts /tmp/runbook-demo/hosts-copy && ls -l /tmp/runbook-demo
    Observation : Copied the files from /etc/hosts. Filesystem is writable.

# CPU / Memory
- command = ps -o pid,pcpu,pmem,comm -p $(pidof sshd)
output: PID %CPU %MEM COMMAND  
        1185  0.0  0.8 sshd  
        1186  0.0  1.0 sshd  
        1297  0.0  0.7 sshd  

- command = free -h
output: 
               total        used        free      shared  buff/cache   available  
Mem:           954Mi       374Mi       318Mi       892Ki       418Mi       580Mi  
Swap:             0B          0B          0B  

Observation : Process running and CPU & Memory usage is negligible.

 
# Disk / IO
- Command = df -h  
Output : /dev/root        19G  2.7G   16G  15% /  
Observation : Root partition more than 80% available.  

- Command =  sudo du -sh /var/log
Output: 71M     /var/log  
Observatioin: check the total disk space used by the /var/log

# Network 
- Command : sudo ss -tulpn | grep  sshd  
Output : tcp   LISTEN 0      4096         0.0.0.0:22         0.0.0.0:*    users:(("sshd",pid=1185,fd=3), ("systemd",pid=1,fd=90))  

Observation : ssh is listening on port 22.

- Command : nc -zv localhost 22  
Output : Connection to localhost (127.0.0.1) 22 port [tcp/ssh] succeeded!  

Observation : Connection confirmed.


# Logs
- Command : journalctl -u ssh -n 50  
Observation : Last 50 lines shows normal authentication attempts no errors or warnings.

- Command : tail -n 50 /var/log/auth.log  

Observation : Recent login attempts record. No suspicious activity detected.  

# Quick review
- ssh service running normally with low CPU usage  
- Disk and logs size is healthy  
- Network port 22 is open and serving connections.  
- No errors in logs.  

# If this worsens
- Check logs again
- Check CPU usage/Disk usage
- Restart service
- Check if port is used by other service