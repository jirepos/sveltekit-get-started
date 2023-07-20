


# function ReturnFunc { 
#   return "hello"
# }

# ReturnFunc 


# function  prompt {

# # PowerShell 은 "prompt" 라는 이름의 함수를 통해 Prompt 를 어떻게 표시 할 것인지를 결정합니다.
# # "prompt" 함수는 기본적으로 PowerShell 에 의해 자동으로 만들어 지지만,
# # 함수를 재정의해서 Prompt 표시 내용을 마음대로 변경 할 수도 있습니다.
# # 또, 재정의 한 "prompt" 함수를 Windows PowerShell Profile 에 등록 해 두면, 항상 재 정의 된 Prompt 로 작업할 수 있습니다.
#   $CurrentDirectory = Get-Location
#   $DirectoryName = Split-Path -Leaf $CurrentDirectory
#   #Write-Host "PS $($DirectoryName) >" -NoNewline -ForegroundColor Cyan
#   #return " "
#   "PS $($DirectoryName) >" #-NoNewline -ForegroundColor Cyan
# }
