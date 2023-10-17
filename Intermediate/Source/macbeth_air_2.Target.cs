using UnrealBuildTool;

public class macbeth_air_2Target : TargetRules
{
	public macbeth_air_2Target(TargetInfo Target) : base(Target)
	{
		DefaultBuildSettings = BuildSettingsVersion.V2;
		Type = TargetType.Game;
		ExtraModuleNames.Add("macbeth_air_2");
	}
}
