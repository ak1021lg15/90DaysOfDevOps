# Core components of Linux:
Hardware : The physical component where OS is installed.  
Kernel : The heart of Linux. The central core that directly controls hardware, processes, memory.Interface between hardware and software. Machine understands kernel language.  
Shell : Interactive way to talk to kernel using commands.
GUI : Graphical user interface for visual interaction.
System Libraries : Collections of pre-written functions that applications use to request services from the kernel.
System Utilities : Programs and tools (like ls, cp, grep) that perform specific tasks, managing files, users, and system operations.

# Processes in Linux
Processes are instances of running programs. For ex. if you do pin ww.google.com then ping process is created. You can list processes using ps(ps ax, ps ef) or top commands.

# What systemd does and why it matters
systemd is a system and service manager in Linux that initializes the system during boot and manages system services.

# Process states
running : A running process is a process that is currently executing and using the CPU.
sleeping : A sleeping process is waiting for an event or resource before it can continue execution.
Stopped : Process suspended by signal SIGSTOP (Ctrl+Z, Ctrl+C). It can be resumed by a SIGCONT signal.
Zombie : The process has terminated, but its entry in the process table still exists because its parent process has not yet read its exit status
idle: Idle process means the system is not doing any work and the CPU is free.

# Commands used daily
ls: list files and directories
cd: change directory
pwd: show current directory
mkdir: create a new directory
rm – remove files or directories
ps or top : Provides process ID, memory usage, CPU time and command name which is crucial for monitoring system performance and troubleshooting.
chmod : Changing permission of files.
ssh : Provides secure shell connecting to remote server.
systemctl : Managing system services (starting, stopping).
df /du : df is used to monitor disk space usage and du is used to estimate size of a specific directory.

