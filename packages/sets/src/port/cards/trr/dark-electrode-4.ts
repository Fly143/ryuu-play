import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class DarkElectrode_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Navigation", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Dark Electrode has no Energy attached to it, you may search your deck for a Darkness or Dark Metal Energy and attach it to Dark Electrode. Shuffle your deck afterward. This power can't be used if Dark Electrode is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Bomb", cost: [], damage: "30", text: "You may move all Energy cards attached to Dark Electrode to your Benched Pokémon in any way you like." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Electrode";
  public fullName: string = "Dark Electrode TRR 4";
  public text: string = "Dark Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
