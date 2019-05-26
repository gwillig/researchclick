@echo off

setlocal EnableDelayedExpansion

set array[1]="Gustav"
set array[2]=22750289 5600
set array[3]=22750289 5612

for /L %%N in (1,1,3) do (
echo !array[%%N]!)

endlocal

timeout 10
